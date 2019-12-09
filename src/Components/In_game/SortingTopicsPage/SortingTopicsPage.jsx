import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/SortingTopicsPage.css';
import SortingTopicsAPI from '../../../API/SortingTopicsAPI.js'


class SortingTopicsPage extends Component {
  
    constructor(){
        super();
        this.state = {
            listImages : [],
			currentImg : "",
			currentDesc : "",
			indexCat : 0,
            indexImg : 0
        }
		/*this.state = {
			listImages : [],
			currentImg : "",
			currentDesc : "",
			indexCat : 0,
            indexImg : 0,
            cmpt1 : 0,
            cmpt2 : 0, 
            cmpt3 : 0, 
            listImagesPresent :[],
            //tableau un peu inutile
            listImagesNotPresent :[],
            listImagesWanted :[],
		}*/
		this.api = new SortingTopicsAPI();
		this.state.listImages = this.api.getImages();
		this.state.currentImg = "Images/deplacements/" + this.state.listImages[this.state.indexCat][this.state.indexImg].name + ".jpg";
		this.state.currentDesc = this.state.listImages[this.state.indexCat][this.state.indexImg].desc;
		this.handleClick = this.handleClick.bind(this);
	}
   
    handleClick(e){
		this.api.sendImage(this.state.listImages[this.state.indexCat][this.state.indexImg].name, e.target.name);
		const catName = ["deplacements", "habitation", "loisirs", "nutrition", "relationscom", "responsabilites", "soinspersonnels"]
		const nbImages = [5,7,4,7,3,1,17]
		let tempImg = this.state.indexImg +1 ;  
		let tempCat = this.state.indexCat +1 ; 
		if (tempImg >= nbImages[this.state.indexCat]){
			this.state.indexCat = tempCat;
			tempImg = 0;
			this.state.indexImg = tempImg;
        }
        // tableaux contenant les choix
        /*if(e.target.name ==="1"){
            this.state.listImagesPresent[this.state.cmpt1]= this.state.listImages[this.state.indexCat][this.state.indexImg].name; 
            this.state.cmpt1 = this.state.cmpt1 +1; 
        }else if (e.target.name ==="2"){
            this.state.listImagesNotPresent[this.state.cmpt2]= this.state.listImages[this.state.indexCat][this.state.indexImg].name; 
            this.state.cmpt2 = this.state.cmpt2 +1; 
        }else {
            this.state.listImagesWanted[this.state.cmpt3]= this.state.listImages[this.state.indexCat][this.state.indexImg].name; 
            this.state.cmpt3 = this.state.cmpt3 +1; 
        }*/

        this.state.indexImg = tempImg;
        
		this.setState({
			currentImg : 
			"Images/" + catName[this.state.indexCat] + "/" + this.state.listImages[this.state.indexCat][this.state.indexImg].name + ".jpg",
			currentDesc :
			this.state.listImages[this.state.indexCat][this.state.indexImg].desc
        })   
    }

    
  
    render() {
    return (
        <nav class="container">
            <div>
            
            <p>{this.state.currentDesc}</p>
				<img src={this.state.currentImg} alt={this.state.currentDesc} className="imgHabit"/>
            </div>
            <br/>
            <h4>Selectionnez l'un des trois choix selon vos habitudes</h4>
            <br/><br/><br/>
            <div>
                <table class="table_order">
                    <tbody>
                        <tr>
                            <td class="cel"><button name="1" class="Sorted_button" onClick={this.handleClick}>Présent dans mes habitudes</button></td>
                            <td class="cel"><button name="2" class="Sorted_button" onClick={this.handleClick}>Non-présent dans mes habitudes</button></td>
                            <td class="cel"><button name="3" class="Sorted_button" onClick={this.handleClick}>Je veux dans mes habitudes</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </nav>
    );
  }
}

export default SortingTopicsPage;