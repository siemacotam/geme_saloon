export class UI {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]',
        counter: '[data-counter]',
        timer: '[data-timer]',
        resetButton: '[data-button-reset]',
        modal: '[data-modal]',
        modalHeader: '[data-modal-header]',
        modalButton: '[data-modal-button]',
        easyButton: '[data-button-easy]',
        normalButton: '[data-button-normal]',
        expertButton: '[data-button-expert]',
    }

    getElement(selector){
        return document.querySelector(selector);
    }
    getElements(selector){
        return document.querySelectorAll(selector);
    }
}