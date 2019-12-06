//Login endpoint

import API from "./API.js"
//import axios from 'axios'

class choiceAPI extends API{

    constructor(){
        super();
        this.endpoint = this.url + "/choice";
    }

	getCategory(){
        const listImages = [
                [   {name : 'bus', desc : 'Prendre le bus'},
                    {name : 'marcher', desc : 'Marcher'},
                    {name : 'traverser', desc : 'Traverser un passage piéton'},
                    {name : 'velo', desc : 'Faire du vélo'},
                    {name : 'voiture', desc : 'Etre dans la voiture'}
                ],
                [
                    {name : 'allumer_lumiere', desc : 'Allumer la lumière'},
                    {name : 'balayer', desc : 'Balayer'},
                    {name : 'machine_laver', desc : 'Utiliser la machine à laver'},
                    {name : 'passer_piece', desc : 'Passer d\'une pièce à l\'autre'},
                    {name : 'prothese', desc : 'Avoir une prothèse'},
                    {name : 'ranger_espace', desc : 'Ranger son espace'},
                    {name : 'vaisselle', desc : 'Faire la vaisselle'}
                ],
                [
                    {name : 'casque_ordi', desc : 'Avoir son casque et son ordinateur'},
                    {name : 'ecrire', desc : 'Ecrire'},
                    {name : 'lire', desc : 'Lire'},
                    {name : 'television', desc : 'Regarder la télévision'}
                ],
                [
                    {name : 'boire_tasse', desc : 'Boire avec une tasse'},
                    {name : 'dresser_table', desc : 'Dresser la table'},
                    {name : 'manger_restaurant', desc : 'Manger au restaurant'},
                    {name : 'manger_mains', desc : 'Manger avec les mains'},
                    {name : 'preparer_manger', desc : 'Préparer à manger'},
                    {name : 'sandwich', desc : 'Manger un sandwich'},
                    {name : 'servir_aliments', desc : 'Servir des aliments'}
                ],
                [
                    {name : 'parler_adultes', desc : 'Parler à des adultes'},
                    {name : 'parler_communaute', desc : 'Parler en communauté'},
                    {name : 'telephone', desc : 'Parler au téléphone'}
                ],
                [
                    {name : 'acheter', desc : 'Acheter quelque chose'}
                ],
                [
                    {name : 'laver_mains', desc : 'Se laver les mains'},
                    {name : 'urgence', desc : 'Aller aux urgences'},
                    {name : 'brosser_cheveux', desc : 'Se brosser les cheveux'},
                    {name : 'chaussures', desc : 'Mettre ses chaussures'},
                    {name : 'dormir', desc : 'Dormir'},
                    {name : 'douche', desc : 'Prendre une douche'},
                    {name : 'habits_sales', desc : 'Mettre des habits sales'},
                    {name : 'laver_cheveux', desc : 'Se laver les cheveux'},
                    {name : 'vetements_garderobe', desc : 'Choisir ses vêtements'},
                    {name : 'essuyer', desc : 'S\'essuyer'},
                    {name : 'habiller_tirette', desc : 'Mettre des habits avec une tirette'},
                    {name : 'habiller', desc : 'S\'habiller'},
                    {name : 'brosser_dents', desc : 'Se brosser les dents'},
                    {name : 'lever', desc : 'Se lever'},
                    {name : 'moucher', desc : 'Se moucher'},
                    {name : 'secher_cheveux', desc : 'Se sécher les cheveux'},
                    {name : 'toilettes', desc : 'Aller aux toilettes'}
                ]
        ]
		return listImages;
	}

}

export default choiceAPI;