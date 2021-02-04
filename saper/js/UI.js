export class UI {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]',
    }

    getElement(selector){
        return document.querySelector(selector);
    }
    getElements(selector){
        document.querySelectorAll(selector);
    }
}