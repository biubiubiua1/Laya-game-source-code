/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui {
    export class DownLoadUI extends Scene {
		public bgMask:Laya.Sprite;
		public imgGuang:Laya.Image;
		public imgBg:Laya.Image;
		public btnDownload:Laya.Button;
		public btnRetry:Laya.Button;
		public imgStar1:Laya.Image;
		public imgStar2:Laya.Image;
		public imgStar3:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":720,"runtime":"script/GameUI.ts","positionVariance_0":100,"maxPartices":100,"height":1280},"compId":1,"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":720,"var":"bgMask","height":1280},"compId":35,"child":[{"type":"Box","props":{"width":720,"height":1280,"bgColor":"#000000"},"compId":37}]},{"type":"Image","props":{"y":630,"x":360,"var":"imgGuang","skin":"game/img_bg_guang.png","name":"imgGuang","anchorY":0.5,"anchorX":0.5},"compId":29},{"type":"Image","props":{"y":412,"x":110,"var":"imgBg","skin":"game/img_bg_download.png","name":"imgBg"},"compId":30},{"type":"Button","props":{"y":770,"var":"btnDownload","stateNum":1,"skin":"game/btn_continue.png","name":"btnDownload","centerX":110},"compId":28},{"type":"Button","props":{"y":770,"x":157,"var":"btnRetry","stateNum":1,"skin":"game/btn_retry.png","name":"btnRetry"},"compId":38},{"type":"Image","props":{"y":398,"x":250,"var":"imgStar1","skin":"game/img_star.png","anchorY":0.5,"anchorX":0.5},"compId":39},{"type":"Image","props":{"y":398,"x":360,"var":"imgStar2","skin":"game/img_star.png","anchorY":0.5,"anchorX":0.5},"compId":40},{"type":"Image","props":{"y":398,"x":473,"var":"imgStar3","skin":"game/img_star.png","anchorY":0.5,"anchorX":0.5},"compId":41}],"loadList":["game/img_bg_guang.png","game/img_bg_download.png","game/btn_continue.png","game/btn_retry.png","game/img_star.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(DownLoadUI.uiView);
        }
    }
    REG("ui.DownLoadUI",DownLoadUI);
    export class failviewUI extends Scene {
		public img_faildb:Laya.Sprite;
		public txt_badluck:Laya.Label;
        public static  uiView:any ={"type":"Scene","props":{"width":720,"height":1280},"compId":2,"child":[{"type":"Sprite","props":{"width":720,"var":"img_faildb","name":"img_faildb","height":1280,"alpha":0.6},"compId":4},{"type":"Label","props":{"y":765,"x":360,"var":"txt_badluck","text":"Bad Luck","name":"txt_badluck","fontSize":80,"color":"#1b1919","bold":true,"anchorY":0.5,"anchorX":0.5},"compId":7}],"loadList":[],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(failviewUI.uiView);
        }
    }
    REG("ui.failviewUI",failviewUI);
    export class GameUI extends Scene {
		public btnDownload:Laya.Button;
		public txtBulletCount:Laya.Text;
		public lblGuide:Laya.Label;
		public ui_roleshow:Laya.Sprite;
		public txt_my:Laya.Text;
        public static  uiView:any ={"type":"Scene","props":{"width":720,"runtime":"script/GameUI.ts","positionVariance_0":100,"maxPartices":100,"height":1280},"compId":1,"child":[{"type":"Button","props":{"y":1214,"visible":false,"var":"btnDownload","stateNum":1,"skin":"game/btn_download.png","name":"btnDownload","left":239,"label":"label","anchorY":0.5,"anchorX":0.5},"compId":22},{"type":"Text","props":{"y":1040,"x":30,"width":143,"visible":false,"var":"txtBulletCount","text":"X5","name":"txtBulletCount","height":56,"fontSize":60,"color":"#ffffff","runtime":"Laya.Text"},"compId":25},{"type":"Label","props":{"y":360,"width":422,"var":"lblGuide","height":61,"fontSize":60,"color":"#ffffff","centerX":0,"align":"center"},"compId":31},{"type":"Sprite","props":{"y":411,"x":355,"width":128,"var":"ui_roleshow","texture":"game/ui_role.png","scaleY":0.5,"scaleX":0.5,"pivotX":64,"name":"ui_roleshow","mouseThrough":true,"height":124},"compId":35,"child":[{"type":"Text","props":{"y":27,"x":23.5,"width":81,"var":"txt_my","valign":"middle","text":"30","name":"txt_my","height":47,"fontSize":60,"color":"#f6f0ef","bold":true,"align":"center","runtime":"Laya.Text"},"compId":36}]}],"loadList":["game/btn_download.png","game/ui_role.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(GameUI.uiView);
        }
    }
    REG("ui.GameUI",GameUI);
    export class GameTouchViewUI extends View {
		public btn_download:Laya.Button;
		public ui_center:Laya.Sprite;
		public guide:Laya.Sprite;
		public imgGuide:Laya.Image;
		public tapend:Laya.Sprite;
		public img_tap:Laya.Image;
        public static  uiView:any ={"type":"View","props":{"width":720,"runtime":"custom/ui/GameTouchView.ts","height":1280},"compId":2,"child":[{"type":"Button","props":{"y":1219,"x":581,"var":"btn_download","stateNum":1,"skin":"game/btn_download.png","name":"btn_download","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":15},{"type":"Sprite","props":{"y":640,"x":360,"width":720,"var":"ui_center","pivotY":640,"pivotX":360,"name":"ui_center","height":1280},"compId":16,"child":[{"type":"Sprite","props":{"y":862,"x":183,"var":"guide","name":"guide"},"compId":3,"child":[{"type":"Sprite","props":{"y":60,"texture":"game/guidejiantou.png"},"compId":4},{"type":"Sprite","props":{"x":35,"texture":"game/guidetxt.png","scaleY":0.8,"scaleX":0.8},"compId":5},{"type":"Image","props":{"y":103,"x":257,"width":97,"var":"imgGuide","skin":"game/guide.png","name":"imgGuide","height":90},"compId":6}]},{"type":"Sprite","props":{"y":735,"x":90,"visible":false,"var":"tapend","name":"tapend"},"compId":9,"child":[{"type":"Image","props":{"y":115.5,"x":302.5,"visible":true,"var":"img_tap","skin":"game/img_guide.png","scaleY":0.5,"scaleX":0.5,"name":"img_tap"},"compId":7},{"type":"Label","props":{"y":19,"x":152,"width":235,"valign":"middle","text":"Tap","overflow":"hidden","height":68,"fontSize":80,"color":"#1c1a1a","bold":true,"align":"center"},"compId":8},{"type":"Sprite","props":{"y":-705,"x":-34,"texture":"game/bar1.png"},"compId":13},{"type":"Sprite","props":{"y":-705,"x":373,"texture":"game/bar1.png"},"compId":14},{"type":"Sprite","props":{"y":-721,"x":-67,"texture":"game/ui_mine.png"},"compId":10},{"type":"Sprite","props":{"y":-721,"x":539,"texture":"game/ui_other.png"},"compId":11}]}]}],"loadList":["game/btn_download.png","game/guidejiantou.png","game/guidetxt.png","game/guide.png","game/img_guide.png","game/bar1.png","game/ui_mine.png","game/ui_other.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(GameTouchViewUI.uiView);
        }
    }
    REG("ui.GameTouchViewUI",GameTouchViewUI);
    export class LoadingUI extends Scene {
		public bar:Laya.ProgressBar;
        public static  uiView:any ={"type":"Scene","props":{"width":720,"visible":false,"runtime":"script/LoadingUI.ts","positionVariance_0":100,"maxPartices":100,"height":1280},"compId":1,"child":[{"type":"ProgressBar","props":{"y":700,"width":600,"var":"bar","value":0,"skin":"loading/loading.png","name":"bar","height":58,"centerX":0},"compId":26},{"type":"Image","props":{"y":311,"visible":false,"skin":"loading/img_logo.png","scaleY":0.5,"scaleX":0.5,"centerX":0},"compId":27}],"loadList":["loading/loading.png","loading/img_logo.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(LoadingUI.uiView);
        }
    }
    REG("ui.LoadingUI",LoadingUI);
}