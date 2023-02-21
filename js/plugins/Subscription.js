// (function() {
  var webSocket;

  function onCharacterEvent(data) {
    let valid_events = {
      'character_movement': onCharacterMovement,
      'character_login': onCharacterLogIn,
      // 'character_logout': onCharacterLogout,
      'enemy_spawn': onEnemySpawn,
      'enemy_movement': onEnemyMovement,
      'character_health': onCharacterHealth,
      'enemy_health': onEnemyHealth,
      // 'character_use_skill': onCharacterUseSkill,
      // 'target_damaged': onTargetDamaged,
      // 'target_knockout': onTargetKnockout,
      // 'character_exp_gain': onExpUp
  
    }
    let event_type = data['onCharacterEvent']['characterEvent']['eventType'];
    let event_data = data['onCharacterEvent']['characterEvent']['data'];
    if (event_type in valid_events) {
      valid_events[event_type](event_data);
    }
  }


  function onCharacterHealth(data){
    console.log(data)
  }

  function onEnemyHealth(data){
    let event;
    for (i in $gameMap._events){
      if ($gameMap._events[i].data == undefined){
        continue;
      }
      if ($gameMap._events[i].data['id'] == data['id'] && $gameMap._events[i].data['name'] == data['name']) {
        event = $gameMap._events[i];
        break;
      }
    }
    if (event == undefined){
      console.log('Event not found');
      return;
    }

    event._user.battler._hp = data['hp'];
    if (data['is_ko'] == true){
      Galv.SPAWN.unspawn(event);
      delete $gameMap._events[i];
    }
    
  }


  function onEnemyMovement(data){
    let event;
    for (i in $gameMap._events){
      if ($gameMap._events[i].data == undefined){
        continue;
      }
      if ($gameMap._events[i].data['id'] == data['id'] && $gameMap._events[i].data['name'] == data['name']) {
        event = $gameMap._events[i];
        break;
      }
    }
    if (event == undefined){
      console.log('Event not found');
      return;
    }

    for (let i=0; i < 15; i++){
      setTimeout(() => {
        event.moveStraight(event.findDirectionTo(data['x'], data['y']));
      }, i * 10);
    }
  }


  function onCharacterMovement(data){
    let event;
    for (i in $gameMap._events){
      if ($gameMap._events[i].data == undefined){
        continue;
      }
      if ($gameMap._events[i].data['id'] == data['id'] && $gameMap._events[i].data['name'] == data['name']) {
        event = $gameMap._events[i];
        break;
      }
    }

    if (event == undefined){
      console.log('Event not found');
      return;
    }

    for (let i=0; i < 15; i++){
      setTimeout(() => {
        event.moveStraight(event.findDirectionTo(data['x'], data['y']));
      }, i * 10);
    }
  }

  function onCharacterLogIn(data){
    for (i in $gameMap._events){
      try{
        if($gameMap._events[i].data['name'] == data['name'] && $gameMap._events[i].data['id'] == data['id']){
          // avoid re-rendering an aready logged player
          return;
        }
      }
      catch(err){continue;}
    }
    let event_id = class_to_event(data['classType']);
    Galv.SPAWN.event(event_id, data['x'], data['y'], false, data);
  }

  function onEnemySpawn(data){
    let event_id = enemy_to_event(data['enemy_name']);
    data['currentHp'] = data['current_hp'];
    Galv.SPAWN.event(event_id, data['position_x'], data['position_y'], false, data);
  }

  function subscribe(){
    const client_id = 'client__' + Math.random().toString(16).substr(2, 8);
    const GQL = {
      CONNECTION_INIT: 'connection_init',
      CONNECTION_ACK: 'connection_ack',
      CONNECTION_ERROR: 'connection_error',
      CONNECTION_KEEP_ALIVE: 'ka',
      START: 'start',
      STOP: 'stop',
      CONNECTION_TERMINATE: 'connection_terminate',
      DATA: 'data',
      ERROR: 'error',
      COMPLETE: 'complete'
    };
    const valid_operations = {
      'onCharacterEvent': onCharacterEvent,
      // 'onNewChatMessage': onNewChatMessage
    };

    console.log('Connecting to broadcaster...');
    webSocket = new WebSocket("wss://ggj23server.brunolcarli.repl.co/subscriptions/", "graphql-ws");
    webSocket.onmessage = function (event) {
      data = JSON.parse(event.data);
      operation = Object.keys(data['payload']['data'])[0];
      if (operation in valid_operations) {
        valid_operations[operation](data['payload']['data']);
      }
    };

    webSocket.onopen = function () {
      console.log('Connected.');
      // Subscribe to channels
      console.log('Subscribing to channels...');
      webSocket.send(JSON.stringify({
        type: GQL.START,
        id: `${client_id}__character_event`,
        payload: { "query": `subscription chevt{ onCharacterEvent{ characterEvent{ eventType data } }}` }
      }));
      console.log('Subscribed to character events channel');
      console.log('Subscriptions completed!');
    };
}
// })();