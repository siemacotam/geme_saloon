export const HIDDEN__CLASS = 'hidden';
export const HIDDEN_SCREEN = false;
export const VISIBLE_SCREEN = true;

export class Common {
    constructor(elementId) {
        this.element =this.bindToElement(elementId);
    }

    bindToElement(elementToFindById){
        const element = document.getElementById(elementToFindById);

        if (!element) {
            throw new Error(`nie znaleziono elementu ID ${elementToFindById}`)
        }

        return element;
    }

    changeVisibilityScreen(element, mode) {
        mode === VISIBLE_SCREEN ? element.classList.remove(HIDDEN__CLASS) : element.classList.add(HIDDEN__CLASS);
    }
}