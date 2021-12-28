import React from 'react'
import CSS from 'csstype';


export default function Categories(props: { background: any; body: any; eyes: any; mouth: any; head: any; hands: any; handleBackGroundChange: any; handleBodyChange: any; handleEyesChange: any; handleMouthChange: any; handleHeadChange: any; handleHandsChange: any; generateRandomArtFromSelections: any; estimatedMintPrice: any; }) {

    const floatContainer: CSS.Properties = {

    };

    const floatChild: CSS.Properties = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'start', 
        width: '328px'
    };

    // let initialBackground = "common";
    // let initialBody = "common";
    // let initialEyes = "common";
    // let initialMouth = "common";
    // let initialHead = "common";
    // let initialHands = "common";

    const { 
        background, body, eyes, mouth, head, hands, 
        handleBackGroundChange, handleBodyChange, handleEyesChange, handleMouthChange, handleHeadChange, handleHandsChange,
        generateRandomArtFromSelections, estimatedMintPrice} = props;

    const backGroundChange = (e: any) => {
        handleBackGroundChange(e);
    };
    const bodyChange = (e: any) => {
        handleBodyChange(e);
    };
    const eyesChange = (e: any) => {
        handleEyesChange(e);
    };
    const mouthChange = (e: any) => {
        handleMouthChange(e);
    };
    const headChange = (e: any) => {
        handleHeadChange(e);
    };
    const handsChange = (e: any) => {
        handleHandsChange(e);
    };

    return (

        <div style={floatContainer}>
            <div style={floatChild} >
                <div>
                    <button>BACKGROUND</button>
                </div>
                <div>
                    <span>&emsp;</span>
                </div>
                <div>
                    <select value={background} onChange={backGroundChange}>
                        <option value="common">Common (0.02)</option>
                        <option value="rare">Rare (0.04)</option>
                        <option value="epic">Epic (0.06)</option>
                    </select>
                </div>
            </div>
            <div style={floatChild} >
                <div>
                    <button>BODY</button>
                </div>
                <div>
                    <span>&emsp;</span>
                </div>
                <div>
                    <select value={body} onChange={bodyChange}>
                        <option value="common">Common (0.02)</option>
                        <option value="rare">Rare (0.04)</option>
                        <option value="epic">Epic (0.06)</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>EYES</button>
                </div>
                <div>
                    <span>&emsp;</span>
                </div>
                <div>
                    <select value={eyes} onChange={eyesChange}>
                        <option value="common">Common (0.02)</option>
                        <option value="rare">Rare (0.04)</option>
                        <option value="epic">Epic (0.06)</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>MOUTH</button>
                </div>
                <div>
                    <span>&emsp;</span>
                </div>
                <div>
                    <select value={mouth} onChange={mouthChange}>
                        <option value="common">Common (0.02)</option>
                        <option value="rare">Rare (0.04)</option>
                        <option value="epic">Epic (0.06)</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>HEAD</button>
                </div>
                <div>
                    <span>&emsp;</span>
                </div>
                <div>
                    <select value={head} onChange={headChange}>
                        <option value="common">Common (0.02)</option>
                        <option value="rare">Rare (0.04)</option>
                        <option value="epic">Epic (0.06)</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>HANDS</button>
                </div>
                <div>
                    <span>&emsp;</span>
                </div>
                <div>
                    <select value={hands} onChange={handsChange}>
                        <option value="common">Common (0.02)</option>
                        <option value="rare">Rare (0.04)</option>
                        <option value="epic">Epic (0.06)</option>
                    </select>
                </div>
            </div>
            <div>
                <br />
            </div>
            <div style={floatChild}>
                <button
                    onClick={() => { generateRandomArtFromSelections()}}
                    type="submit">
                    Generate Custom Art
                </button>
                <button>
                    Est:{estimatedMintPrice} SOL
                </button>
            </div>
        </div>
        
    )
}


