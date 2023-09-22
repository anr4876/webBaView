import React from "react";

import "./popupview.css"

export default function PopupView({title, images, address, description, onCloseClicked, isVisible, style={}}) {
    const classList = {
        "popup-view": true,
        "hidden": !isVisible,
    };
    return (
        <div class="popup-view" className={toggleClassList(classList)} style={style}>
            <button class="popup-view-close-btn" onClick={onCloseClicked}>X</button>
            <div class="popup-view-title">{title}</div>
            <div class="popup-view-address">{address}</div>

            {
                description && <div class="popup-view-description">{description}</div>
            }
            <ul class="popup-view-images">
                {
                    images &&images.map(img => <li><img src={img} alt={img}/></li>)
                }
            </ul>
        </div>
    )
}

function toggleClassList(list) {
    let classList = [];
    for(const [k, v] of Object.entries(list)) {
        if(!!v) {
            classList.push(k);
        }
    }
    return classList.join(" ");
}
