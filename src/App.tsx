import LayeredImage from "react-layered-image";
import React, { Component } from 'react'
import "./App.css";
import CSS from 'csstype';
import { background, body, eyes, mouth, head, hands } from './layersDB';
// import Generate from './Generate';
// import Save from './Save';
import Categories from './Categories';
import MemberDetails from './MemberDetails';
import * as queryString from 'query-string';
// import sha1 from 'sha1';
// const fs = require('fs');


// const layers = [
//   "carmine_background.png",
//   "carmine_smoke.png",
//   "carmine_action.png",
// ];

const priceList = {
  "None": 0.00,
  "common": 0.01, 
  "rare": 0.02, 
  "epic": 0.03, 
  "legendary": 0.04, 
  "mythic": 0.05,
}

// const floatContainer: CSS.Properties = {

// };

const flexCenter: CSS.Properties = {
  display: 'flex',
  justifyContent: 'start',
  gap: '10px 30px'
};

export default class App extends Component {

  generateRandomNum = (arr: string[]) => {
    return Math.floor(Math.random() * arr.length)
  } 

  state = { 
    layers: { 
        background: background["none"][this.generateRandomNum(background["none"])], 
        body: body["none"][this.generateRandomNum(body["none"])], 
        eyes: eyes["none"][this.generateRandomNum(eyes["none"])], 
        mouth: mouth["none"][this.generateRandomNum(mouth["none"])],
        head: head["none"][this.generateRandomNum(head["none"])], 
        hands: hands["none"][this.generateRandomNum(hands["none"])],         
    }, 
    categories: {
        background: "common", 
        body: "common",
        eyes: "common",
        mouth: "common",
        head: "common",
        hands: "common",
    }, 
    information: {
        itemId: "1",
        discordId: "", 
        solanaWallet: "", 
        twitterId: "", 
        additionalNotes: "", 
    }, 
    estimatedMintPrice: 0.00,
  };

  style: React.CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e8ed" 
  };

  generateRandomArtFromSelections = () => {
  
    let categories = this.state.categories;
    let strbg = categories.background;
        
    let newCustomArt = {
        background: background[strbg][this.generateRandomNum(background[this.state.categories.background])], 
        body: body[this.state.categories.body][this.generateRandomNum(body[this.state.categories.body])], 
        eyes: eyes[this.state.categories.eyes][this.generateRandomNum(eyes[this.state.categories.eyes])], 
        mouth: mouth[this.state.categories.mouth][this.generateRandomNum(mouth[this.state.categories.mouth])],
        head: head[this.state.categories.head][this.generateRandomNum(head[this.state.categories.head])], 
        hands: hands[this.state.categories.hands][this.generateRandomNum(hands[this.state.categories.hands])],  
    }

    let estMintPrice = priceList[this.state.categories.background] + 
            priceList[this.state.categories.body] + 
            priceList[this.state.categories.eyes] + 
            priceList[this.state.categories.mouth] + 
            priceList[this.state.categories.head] + 
            priceList[this.state.categories.hands];
    
    //update state
    this.setState({
        layers: newCustomArt, 
        estimatedMintPrice: parseFloat(estMintPrice).toFixed(2)
    })
  }

  getUpdateLayers = () => {
    const layers = [
        this.state.layers.background, 
        this.state.layers.body, 
        this.state.layers.eyes, 
        this.state.layers.mouth, 
        this.state.layers.head, 
        this.state.layers.hands, 
    ]
    return layers;
  };

  handleBackGroundChange = (e: { target: { value: any; }; }) => {
    this.setState({categories: {
        background: e.target.value,
        body: this.state.categories.body,
        eyes: this.state.categories.eyes,
        mouth: this.state.categories.mouth,
        head: this.state.categories.head,
        hands: this.state.categories.hands,
    }})
  }

  handleBodyChange = (e: { target: { value: any; }; }) => {
      this.setState({categories: {
          background: this.state.categories.background,
          body: e.target.value,
          eyes: this.state.categories.eyes,
          mouth: this.state.categories.mouth,
          head: this.state.categories.head,
          hands: this.state.categories.hands,
      }})
  };
  handleEyesChange = (e: { target: { value: any; }; }) => {
      this.setState({categories: {
          background: this.state.categories.background,
          body: this.state.categories.body,
          eyes: e.target.value,
          mouth: this.state.categories.mouth,
          head: this.state.categories.head,
          hands: this.state.categories.hands,
      }})
  };
  handleMouthChange = (e: { target: { value: any; }; }) => {
      this.setState({categories: {
          background: this.state.categories.background,
          body: this.state.categories.body,
          eyes: this.state.categories.eyes,
          mouth: e.target.value,
          head: this.state.categories.head,
          hands: this.state.categories.hands,
      }})
  };
  handleHeadChange = (e: { target: { value: any; }; }) => {
      this.setState({categories: {
          background: this.state.categories.background,
          body: this.state.categories.body,
          eyes: this.state.categories.eyes,
          mouth: this.state.categories.mouth,
          head: e.target.value,
          hands: this.state.categories.hands,
      }})
  };
  handleHandsChange = (e: { target: { value: any; }; }) => {
      this.setState({categories: {
          background: this.state.categories.background,
          body: this.state.categories.body,
          eyes: this.state.categories.eyes,
          mouth: this.state.categories.mouth,
          head: this.state.categories.head,
          hands: e.target.value,
      }})
  };
  handleItemIdChange = (e: { target: { value: any; }; }) => {
      this.setState({information: {
          itemId: e.target.value,
          discordId: this.state.information.discordId, 
          solanaWallet: this.state.information.solanaWallet, 
          twitterId: this.state.information.twitterId, 
          additionalNotes: this.state.information.additionalNotes,
      }})
  };
  handleDiscordChange = (e: { target: { value: any; }; }) => {
      this.setState({information: {
          itemId: this.state.information.itemId,
          discordId: e.target.value, 
          solanaWallet: this.state.information.solanaWallet, 
          twitterId: this.state.information.twitterId, 
          additionalNotes: this.state.information.additionalNotes,
      }});
  };
  handleSolanaWalletChange = (e: { target: { value: any; }; }) => {
      this.setState({information: {
          itemId: this.state.information.itemId,
          discordId: this.state.information.discordId, 
          solanaWallet: e.target.value, 
          twitterId: this.state.information.twitterId, 
          additionalNotes: this.state.information.additionalNotes,
      }});
  };
  handleTwitterChange = (e: { target: { value: any; }; }) => {
      this.setState({information: {
          itemId: this.state.information.itemId,
          discordId: this.state.information.discordId, 
          solanaWallet: this.state.information.solanaWallet, 
          twitterId: e.target.value, 
          additionalNotes: this.state.information.additionalNotes,
      }});
  }
  handleAdditionalNotesChange = (e: { target: { value: any; }; }) => {
      this.setState({information: {
          itemId: this.state.information.itemId,
          discordId: this.state.information.discordId, 
          solanaWallet: this.state.information.solanaWallet, 
          twitterId: this.state.information.twitterId, 
          additionalNotes: e.target.value, 
      }});
  };

  myRequest = (url: string) => {
    var opts = {
      method: "POST",
      mode: "no-cors" as RequestMode, 
      redirect: "follow" as RequestRedirect, 
      referrer: "no-referrer"
    };
    let resp = fetch(url+'&submit=SUBMIT', opts);
    return resp;
  };

  getGoogleFormData = () => {
      let googleData = {
          "entry.1346210675": this.state.information.itemId,
          "entry.54977837": this.state.information.discordId,
          "entry.1929991873": this.state.information.solanaWallet, 
          "entry.983485354": this.state.information.twitterId,
          "entry.1662336788": this.state.information.additionalNotes, 

          "entry.742062313": this.state.categories.background, 
          "entry.2087947351": this.state.categories.body, 
          "entry.1059066094": this.state.categories.eyes, 
          "entry.741208530": this.state.categories.mouth, 
          "entry.50786016": this.state.categories.head, 
          "entry.1399479577": this.state.categories.hands, 
          
          "entry.1023280485": this.state.layers.background, 
          "entry.1806221050": this.state.layers.body, 
          "entry.1166152535": this.state.layers.eyes, 
          "entry.1148421230": this.state.layers.mouth, 
          "entry.967779604": this.state.layers.head, 
          "entry.1490229031": this.state.layers.hands, 

          "entry.1519520754": this.state.estimatedMintPrice,
      };
      return googleData;
  };

  // getExistingDnaList = () => {
  //   var array = fs.readFileSync('allDnaList.txt').toString().split("\n");
  //   return array;
  // };

  // updateExistingDnaList = (newDna: any) => {
  //     var dnaList = this.getExistingDnaList();
  //     dnaList.push(newDna);

  //     let text = dnaList.join('\n');
  //     fs.writeFileSync('allDnaList.txt', text);
  // };

  // createDna = () => {
  //   let arr = this.getUpdateLayers();
  //   let text = arr.join("-");
  //   return sha1(text);
  // }

  // validateSubmitForm = () => {
  //   let existingDna = this.getExistingDnaList();
  //   console.log(`existingDna = ${existingDna}`);
  // }

  handleGoogleFormSubmit = (e: { preventDefault: () => void; }) => {

    const id = "1FAIpQLScpjEcjktqcGbiq1YlLXcFkJMQZqqqoAv394D4KF86A924RBw" //YOUR FORM ID
    e.preventDefault()
    const formUrl = "https://docs.google.com/forms/d/e/"+id+"/formResponse";
    const q = queryString.stringifyUrl({
    url: formUrl,
    query: this.getGoogleFormData()
    })
    this.myRequest(q)
  }


  render () {
    return (
      <div>
        <div style={flexCenter}>
            <div>
                <Categories
                    background={this.state.categories.background}
                    body={this.state.categories.body} 
                    eyes={this.state.categories.eyes} 
                    mouth={this.state.categories.mouth} 
                    head={this.state.categories.head} 
                    hands={this.state.categories.hands} 
                    handleBackGroundChange={this.handleBackGroundChange}
                    handleBodyChange={this.handleBodyChange}
                    handleEyesChange={this.handleEyesChange}
                    handleMouthChange={this.handleMouthChange}
                    handleHeadChange={this.handleHeadChange}
                    handleHandsChange={this.handleHandsChange}
                    generateRandomArtFromSelections={this.generateRandomArtFromSelections}
                    estimatedMintPrice={this.state.estimatedMintPrice}
                />
            </div>
            <div>
                <div>
                    <LayeredImage 
                        aspectRatio={1600/1600}
                        layers={this.getUpdateLayers()} 
                        style={{ width: 256 }} 
                    />
                </div>
                <div>
                    <br/>
                </div>
                <div>
                    <button>
                        Estimated Mint Price: {this.state.estimatedMintPrice} SOL
                    </button>
                </div>
            </div>
        </div>
        
        <div>
            <MemberDetails
                itemId={this.state.information.itemId}
                handleItemIdChange={this.handleItemIdChange}
                handleDiscordChange={this.handleDiscordChange}
                handleSolanaWalletChange={this.handleSolanaWalletChange}
                handleTwitterChange={this.handleTwitterChange}
                handleAdditionalNotesChange={this.handleAdditionalNotesChange}
                handleGoogleFormSubmit={this.handleGoogleFormSubmit}
            />
        </div>
    </div>
    );
  }
}
