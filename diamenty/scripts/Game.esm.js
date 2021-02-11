import {Common, VISIBLE_SCREEN} from './Common.esm.js'
import {gameLevels} from './GameLevels.ems.js'
import { DATALOADED_EVENT_NAME } from './Loader.esm.js';
import {canvas} from './Canvas.ems.js'

const gameState = {
    pointsToWin: 7000,
    getPlayerPoints: () => 1000,
    getLeftMovement: () => 30,
};


class Game extends Common {
    constructor(){
        super();
    }

    playLevel(level){
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel)
        const levelInfo = gameLevels[level - 1];
        this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
        this.animate();
    }

    animate(){
        canvas.drawGameOnCanvas(gameState);
        this.animationFrame = window.requestAnimationFrame(() => this.animate());
    }
}

export const game = new Game();