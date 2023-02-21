// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"init","status":true,"description":"","parameters":{}},
{"name":"requests","status":true,"description":"","parameters":{}},
{"name":"utils","status":true,"description":"","parameters":{}},
{"name":"GALV_EventSpawner","status":true,"description":"(v.1.8) Spawn events from a specified spawn map to a desired location.","parameters":{"Spawn Map Id":"35"}},
{"name":"engine","status":true,"description":"","parameters":{}},
{"name":"Subscription","status":true,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-TITLE SCREEN","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_TitleSplashScreen","status":false,"description":"(v1.0) Adiciona logos antes da tela de título.","parameters":{"Splash Frames":"2","Slash Duration":"120","Splash Fade Duration":"2","Full Screen Mode":"false"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-BATTLE","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_ActionName","status":true,"description":"(v1.2) Apresenta uma janela com nome da ação.","parameters":{"Layout X-Axis":"420","Layout Y-Axis":"64","Name X-Axis":"0","Name Y-Axis":"24","Icon X-Axis":"0","Icon Y-Axis":"-4","Font Size":"22"}},
{"name":"MOG_BattleHud","status":true,"description":"(v3.7) Permite customizar o layout de batalha.","parameters":{"Hud X-Axis":"-100","Hud Y-Axis":"500","Hud Space X":"0","Hud Space Y":"0","Hud Slide X":"0","Hud Slide Y":"250","Vertical Mode":"false","Command Auto Adjust":"true","Max Battle Members":"4",">> LAYOUT OVERLAY =========":"","Layout2 Visible":"true","Layout2 X-Axis":"0","Layout2 Y-Axis":"0",">> TURN ===================":"","Turn Visible":"true","Turn X-Axis":"-10","Turn Y-Axis":"0","Turn Rotation Speed":"0.01","Turn Zoom Animation":"true",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"52","Face Y-Axis":"62","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"false","Face Priority":"0",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"-45","Name Y-Axis":"75","Name Align":"1","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"87","HP Meter Y-Axis":"17","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"170","HP Number Y-Axis":"-1","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"104","MP Meter Y-Axis":"43","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"187","MP Number Y-Axis":"26","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78",">> TP ===================":"","TP Meter Visible":"false","TP Meter X-Axis":"0","TP Meter Y-Axis":"0","TP Meter Angle":"0","TP Meter Flow Anime":"false","TP Number Visible":"false","TP Number Align type":"0","TP Number X-Axis":"0","TP Number Y-Axis":"0","MaxTP Number Visible":"false","MaxTP Number X-Axis":"0","MaxTP Number Y-Axis":"0",">> ATB ===================":"","ATB Meter Visible":"true","ATB Meter X-Axis":"145","ATB Meter Y-Axis":"100","ATB Meter Angle":"0","ATB Meter Flow Anime":"true",">> STATES ===================":"","States Visible":"true","States X-Axis":"102","States Y-Axis":"86","States Mode":"0","States Max":"4","States Align":"0",">> W COMMAND ===================":"","W Command X-Axis":"0","W Command Y-Axis":"-15","W Command Width":"192","W Command Height":"180","W Command Slide X":"0","W Command Slide Y":"64","Layout Command":"true","L Command X-Axis":"-25","L Command Y-Axis":"-35",">> W PARTY ===================":"","W Party X-Axis":"325","W Party Y-Axis":"170","W Party Width":"192","W Party Height":"110","W Party Slide X":"0","W Party Slide Y":"-100","Layout Party":"true","L Party X-Axis":"-325","L Party Y-Axis":"-42",">> W HELP ===================":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","W Help Slide X":"0","W Help Slide Y":"-50","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0",">> W SKILL ===================":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","W Skill Slide X":"0\r","W Skill Slide Y":"50","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67",">> W ITEM ===================":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","W Item Slide X":"0","W Item Slide Y":"50","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67",">> W ACTOR ===================":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","W Actor Slide X":"0","W Actor Slide Y":"50","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67",">> W ENEMY ===================":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","W Enemy Slide X":"0","W Enemy Slide Y":"50","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67",">> SCREEN LAYOUT ===================":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0",">> CUSTOM POSITION ===================":"","Custom Position 1":"","Custom Position 2":"","Custom Position 3":"","Custom Position 4":"","Custom Position 5":"","Custom Position 6":"","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BossHP","status":true,"description":"(v2.2) Apresenta um medidor de HP para os chefes.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"true","Slant Animation":"true","Flow Speed":"4","Name Font Size":"18","Layout X-Axis":"150","Layout Y-Axis":"10","BHP Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32","Number Percentage":"false","Show States":"true","States Max":"8","States X-axis":"50","States Y-axis":"-8"}},
{"name":"MOG_ComboCounter","status":true,"description":"(v1.6) Apresenta a quantidade de acertos no alvo.","parameters":{"C HIT Layout X-Axis":"118","C HIT Layout Y-Axis":"134","C DMG Layout X-Axis":"10","C DMG Layout Y-Axis":"100","C HIT Number X-Axis":"115","C HIT Number Y-Axis":"145","C DMG Number X-Axis":"150","C DMG Number Y-Axis":"103"}},
{"name":"MOG_DmgPopupEffects","status":true,"description":"(v1.0) Adiciona alguns efeitos nos sprites do dano.","parameters":{"Duration":"90","PopUp Type":"0","Zoom Effect":"true","Center Y-Axis":"true"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-VISUAL","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_CharacterMotion","status":true,"description":"(v1.3) Sistema de animações dos sprites dos personagens.","parameters":{}},
{"name":"MOG_DizzyEffect","status":true,"description":"(v1.0) Adiciona o efeito Dizzy.","parameters":{}},
{"name":"MOG_EventIndicators","status":true,"description":"(v1.0) Apresenta indicadores animados acima do evento.","parameters":{"Default Font Size":"16","Default X - Axis":"0","Default Y - Axis":"0"}},
{"name":"MOG_TreasurePopup","status":true,"description":"(v1.1) Apresenta o ícone e o nome do tesouro ganho.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0.60","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"163"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v2.0) Adiciona novos efeitos de climas.","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-GAMEPLAY","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_PickupThrow","status":true,"description":"(v1.4) Sistema de arremessar os eventos.","parameters":{"Character Height":"22","Character Pose":"true","Hold Direction":"true","Hold Direction Button":"pagedown","Sound File":"Jump1"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-HUD","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_ActorHud","status":true,"description":"(v1.9) Adiciona uma Hud com os parâmetros do personagem.","parameters":{"Initial Visible":"true","Hud X-Axis":"0","Hud Y-Axis":"440","Smart Fade":"true","Auto Fade":"true",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"55","Face Y-Axis":"100","Face Priority":"1",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"5","Name Y-Axis":"20","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"143","HP Meter Y-Axis":"85","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align":"0","HP Number X-Axis":"270","HP Number Y-Axis":"70","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","HP Icon Visible":"false","HP Icon Half Mode":"false","HP Icon Max Colors":"2","HP Icon Max Rows":"10","HP Icon Max Columns":"2","HP Icon X-Axis":"143","HP Icon Y-Axis":"85","HP Icon Space X":"0","HP Icon Space Y":"0","HP Icon Zoom Anime":"true",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"160","MP Meter Y-Axis":"115","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align":"0","MP Number X-Axis":"287","MP Number Y-Axis":"100","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","MP Icon Visible":"false","MP Icon Half Mode":"false","MP Icon Max Colors":"2","MP Icon Max Rows":"10","MP Icon Max Columns":"2","MP Icon X-Axis":"143","MP Icon Y-Axis":"120","MP Icon Space X":"0","MP Icon Space Y":"0","MP Icon Zoom Anime":"true",">> TP ===================":"","TP Meter Visible":"false","TP Meter X-Axis":"0","TP Meter Y-Axis":"0","TP Meter Angle":"0","TP Meter Flow Anime":"false","TP Number Visible":"false","TP Number Align":"0","TP Number X-Axis":"0","TP Number Y-Axis":"0","MaxTP Number Visible":"false","MaxTP Number X-Axis":"0","MaxTP Number Y-Axis":"0","TP Icon Visible":"false","TP Icon Half Mode":"false","TP Icon Max Colors":"0","TP Icon Max Rows":"0","TP Icon Max Columns":"0","TP Icon X-Axis":"0","TP Icon Y-Axis":"0","TP Icon Space X":"0","TP Icon Space Y":"0","TP Icon Zoom Anime":"false",">> EXP ===================":"","EXP Meter Visible":"true","EXP Meter X-Axis":"127","EXP Meter Y-Axis":"173","EXP Meter Angle":"0","Level Number Visible":"true","Level Number Align":"1","Level Number X-Axis":"65","Level Number Y-Axis":"153",">> STATES ===================":"","States Visible":"true","States X-Axis":"5","States Y-Axis":"64"}},
{"name":"MOG_GoldHud","status":true,"description":"(v1.6) Apresenta uma Hud com a quantidade de dinheiro.","parameters":{"Initial Visible":"true","Hud X-Axis":"555","Hud Y-Axis":"560","Number X-Axis":"240","Number Y-Axis":"24","Fade Limit":"60"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-CHRONO","status":true,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_CharPoses","status":true,"description":"(v2.1) Ativa poses de movimento no character.","parameters":{"Poses for Followers":"true","Dash Pose":"true","Jump Pose":"false","Idle Pose":"true","Idle Start Time":"60"}},
{"name":"MOG_EventSensor","status":true,"description":"(v1.1) Sistema de distância de eventos.","parameters":{"Self Switch Key":"D"}},
{"name":"MOG_ChronoEngine","status":true,"description":"(v0.2b) Sistema avançado de interação de eventos.","parameters":{"Tool Map ID":"1","Battle Mode":"0","Battle Sensor Range":"3","Max Battle Members":"3","ATB Mode":"2","ATB Max":"1600","States Duration":"240","Diagonal Movement":"true","Touch Input Mode":"true","Attack Command":"true","Shield Command":"false","Skill Command":"true","Item Command":"true","Skill Menu Command":"true","Item Menu Command":"true","Attack Button":"ok","Shield Button":"d","Skill Button":"s","Item Button":"a","Dash Button":"shift","Skill Menu Button":"pagedown","Item Menu Button":"pageup","Escape Button":"shift","Shield Animation ID":"142","Cast Animation ID":"138","Level UP Animation ID":"143","Treasure SE":"Item3","Turn SE":"Ice1","Charging SE":"Up1","Charged SE":"Saint3","Action Cost SE":"Cancel1","Hookshot X-Axis Offset":"12","Hookshot Y-Axis Offset":"0","Cursor Actor X-Axis":"0","Cursor Actor Y-Axis":"-20","Cursor Actor Rotation":"0.02","Cursor Actor Blend Mode":"1","Cursor Actor Opacity":"150","Cursor X-Axis":"0","Cursor Y-Axis":"0","Cursor Float Mode":"true","Cursor FontSize":"18","Cursor Text X-Axis":"0","Cursor Text Y-Axis":"3","Cursor HP X-Axis":"0","Cursor HP Y-Axis":"32","Cursor HP Gauge X-Axis":"0","Cursor HP Gauge Y-Axis":"1","Command X-Axis":"0","Command Y-Axis":"0","Command Name X-Axis":"0","Command Name Y-Axis":"-7","Command Arrow X-Axis":"0","Command Arrow Y-Axis":"0","Phase X-axis":"130","Phase Y-axis":"300","Result X-axis":"200","Result Y-axis":"200","Result FontSize":"24","Result Exp X-axis":"110","Result Exp Y-axis":"80","Result Gold X-axis":"110","Result Gold Y-axis":"185","Escape X-axis":"60","Escape Y-axis":"170","Escape Gauge X-axis":"6","Escape Gauge Y-axis":"23"}},
{"name":"MOG_ChronoATBHud","status":true,"description":"(v1.2) Apresenta a Hud de ATB para o Chrono Engine.","parameters":{"Hud Angle":"0","Hud X-Axis":"740","Hud Y-Axis":"45","Enemy X-Axis Offset":"16","Actor X-Axis Offset":"-16","Active X-Axis":"-3","Active Y-Axis":"30","Gauge Size":"160","Skill Visible":"true","Skill Zoom":"0.6","Skill X-Axis":"0","Skill Y-Axis":"0"}},
{"name":"MOG_ChronoEnemyHP","status":true,"description":"(v1.2) Apresenta o HP do inimigo ao ataca-lo.","parameters":{"Duration":"90","Font Size":"20","Layout X-Axis":"0","Layout Y-Axis":"400","Meter X-Axis":"27","Meter Y-Axis":"29","Name X-Axis":"80","Name Y-Axis":"0"}},
{"name":"MOG_ChronoToolHud","status":true,"description":"(v1.2) Apresenta as huds das ações no Chrono Engine.","parameters":{"Hud Start Visible":"true","Hud Font Size":"18","Hud Item Color":"0","Hud Mp Color":"3","Hud Tp Color":"0","Hud Icon X-Axis":"3","Hud Icon Y-Axis":"19","Hud Cost Number X-Axis":"0","Hud Cost Number Y-Axis":"38","Item Hud X-Axis":"350","Item Hud Y-Axis":"560","Skill Hud X-Axis":"392","Skill Hud Y-Axis":"560","Weapon Hud X-Axis":"434","Weapon Hud Y-Axis":"560","Shield Hud X-Axis":"0","Shield Hud Y-Axis":"0"}},
{"name":"MOG_ChronoCT","status":true,"description":"(v1.1) Adiciona o sistema de CT.","parameters":{"Initial Visible":"true","Dash Cost":"true","Full SE":"","Smart Fade":"true","Slant Animation":"true","Hud X-Axis":"70","Hud Y-Axis":"460","Number X-Axis":"155","Number Y-Axis":"3"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}}
];
