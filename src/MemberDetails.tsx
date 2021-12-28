import React from 'react'
import CSS from 'csstype';


export default function MemberDetails(props: { itemId: any; handleItemIdChange: any; handleDiscordChange: any; handleTwitterChange: any; handleSolanaWalletChange: any; handleAdditionalNotesChange: any; handleGoogleFormSubmit: any; }) {

    const { itemId,
            handleItemIdChange,
            handleDiscordChange, 
            handleTwitterChange, 
            handleSolanaWalletChange, 
            handleAdditionalNotesChange, 
            handleGoogleFormSubmit, 
        } = props;
    

    // const floatContainer: CSS.Properties = {
    //     display: 'flex', 
    //     justifyContent: 'left', 
    //     alignItems: 'start',
    // };

    const floatChildDefault: CSS.Properties = {
        display: 'flex',
        justifyContent: 'left', 
        alignItems: 'start',
    };

    const floatChild: CSS.Properties = {
        display: 'flex',
        justifyContent: 'left', 
        alignItems: 'start',
        width: '328px'
    };

    const itemIdChange = (e: any) => {
        handleItemIdChange(e);
    };
    const discordChange = (e: any) => {
        handleDiscordChange(e);
    };
    const twitterChange = (e: any) => {
        handleTwitterChange(e);
    };
    const solanaWalletChange = (e: any) => {
        handleSolanaWalletChange(e);
    };
    const additionalNotesChange = (e: any) => {
        handleAdditionalNotesChange(e);
    };
    const googleFormSubmit = (e: any) => {
        handleGoogleFormSubmit(e);
        alert("Thank you for interest. Your response is recorded");

        // let existingDna = [];
        // existingDna = getExistingDnaList();
        // let newDna = createDna();
        // console.log(`newDna = ${newDna}`);
        
        // if(!existingDna.includes(newDna)){
        //     handleGoogleFormSubmit(e);
        //     updateExistingDnaList(newDna);
        //     alert("Thank you for interest. Your response is recorded");
        // } else {
        //     alert("Error. This version has already been generated. Try generating a new one again.");
        // }
    };

    return (

        <div>
            <div style={floatChildDefault}>
                <select style={{width: '50px'}} value={itemId} onChange={itemIdChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {/* <div onChange={itemIdChange} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div><button>Select your entry: </button></div>
                    <div><input type="radio" value="1" name="1" checked={itemId === "1"}/> 1 </div>
                    <div><input type="radio" value="2" name="2" checked={itemId === "2"}/> 2 </div>
                    <div><input type="radio" value="3" name="3" checked={itemId === "3"}/> 3 </div>
                </div> */}
            </div>
            <div style={floatChild}>
                <form onSubmit={googleFormSubmit}>
                    <input 
                        className="input" 
                        type="text"
                        style={floatChild}
                        required={true}
                        name="Discord ID"
                        placeholder="Discord ID (Required)"
                        onChange={discordChange}
                    />
                    <input 
                        className="input" 
                        type="text"
                        style={floatChild}
                        required={true}
                        name="Solana Wallet Address" 
                        placeholder="Solana Wallet Address (Required)"
                        onChange={solanaWalletChange}
                    />
                    <input 
                        className="input" 
                        type="text"
                        style={floatChild}
                        name="Twitter ID" 
                        placeholder="Twitter ID (Optional)"
                        onChange={twitterChange}
                    />
                    <input 
                        className="input" 
                        type="text"
                        style={floatChild}
                        name="Notes" 
                        placeholder="Notes (Optional)"
                        onChange={additionalNotesChange}
                    />
                    <button className="button" style={floatChildDefault} type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
    
}