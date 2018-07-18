<template>
    <transition name="modal-popup">
        <div class="popup-mask">
            <div class="popup-wrapper">
                <div class="popup-container">
                    <div class="popup-header">
                        <slot name="header">
                            Default Header
                        </slot>
                    </div>
                    <div class="popup-body">
                        <slot name="body">
                            Default Body
                        </slot>
                    </div>
                    <div class="popup-footer">
                        <slot name="footer">
                            Default Footer
                            <button class="popup-default-button">OK</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
    .popup-mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(34, 34, 34, 0.4);
        display: table;
        transition: opacity .3s ease;
    }
    .popup-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .popup-container {
        width: 360px;
        margin: 0px auto;
        padding-top: 36px;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all .3s ease;
        font-size: 16px;
        overflow: hidden;
    }
    .popup-footer {
        background-color: #f7f7f7;
    }span.close {
        position: relative;
        right: -36em;
        cursor: pointer;
    }

    i.icon-close {
    position: relative;
    right: -36em;
    cursor: pointer;
    }
    .slot-body {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 30px;
    }
    .slot-text-header {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .slot-text-header + p {
        color: #888888;
        line-height: 16px;
    }
    .slot-text-body {
        width: 223px;
    }
    .slot-body-text-container {
    padding: 25px 0px;
    }
    .slot-footer {
        padding: 30px 73px 30px 82px;
    }
    .slot-footer-text-container > p {
        margin-left: 0px;
        margin-bottom: 20px;
    }
    .daftar-container {
        display: flex;
        justify-content: space-between;
    }
    .daftar-container p {
        width: 306px;
        color: #888888;
        line-height: 16px;
    }

    /* POPUP ANIMATION */
    .modal-popup-enter,
    .modal-popup-leave-active {
        opacity: 0;
    }
    .modal-popup-enter .popup-container,
    .modal-popup-leave-active .popup-container {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }
</style>
