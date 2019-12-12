import axios from 'axios'

class commentaryAPI{

    getHabitsByCategory(id){
        var habits = [];
        /*await axios.post('https://esope-prod.herokuapp.com/api/v1/categories/allPictures/', {id:id})
        .then(function (response) {
            response.data.array.forEach(function(element){
                var habit = new Map();
                habit.set("id", element.id);
                habit.set("picture", element.path)
                habits.push(habit);
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });*/

        switch(id){
            case '1':
                var habit = new Map();
                habit.set("id", "17");
                habit.set("picture", "nutrition/boire_tasse.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "18");
                habit.set("picture", "nutrition/dresser_table.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "19");
                habit.set("picture", "nutrition/manger_restaurant.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "20");
                habit.set("picture", "nutrition/manger_mains.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "21");
                habit.set("picture", "nutrition/preparer_manger.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "22");
                habit.set("picture", "nutrition/sandwich.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "23");
                habit.set("picture", "nutrition/servir_aliments.jpg");
                habit.set("nom", "Image relatives à la nutrition");
                habits.push(habit);
                var habit = new Map();
                break;
            case '2':
                var habit = new Map();
                habit.set("id", "28");
                habit.set("picture", "soinspersonnels/laver_mains.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "29");
                habit.set("picture", "soinspersonnels/urgence.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "30");
                habit.set("picture", "soinspersonnels/brosser_cheveux.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "31");
                habit.set("picture", "soinspersonnels/chaussures.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "32");
                habit.set("picture", "soinspersonnels/dormir.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "33");
                habit.set("picture", "soinspersonnels/douche.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "34");
                habit.set("picture", "soinspersonnels/habits_sales.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "35");
                habit.set("picture", "soinspersonnels/laver_cheveux.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "36");
                habit.set("picture", "soinspersonnels/vetements_garderobe.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "37");
                habit.set("picture", "soinspersonnels/brosser_dents.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "38");
                habit.set("picture", "soinspersonnels/lever.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "39");
                habit.set("picture", "soinspersonnels/moucher.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "40");
                habit.set("picture", "soinspersonnels/secher_cheveux.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "41");
                habit.set("picture", "soinspersonnels/essuyer.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "42");
                habit.set("picture", "soinspersonnels/habiller.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "43");
                habit.set("picture", "soinspersonnels/habiller-tirette.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "44");
                habit.set("picture", "soinspersonnels/toilettes.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);


                break; 
            case '3':
                var habit = new Map();
                habit.set("id", "24");
                habit.set("picture", "relationscom/parler_adultes.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "25");
                habit.set("picture", "relationscom/parler_commuaute.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "26");
                habit.set("picture", "relationscom/telephone.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                break; 
            case '4':
                var habit = new Map();
                habit.set("id", "10");
                habit.set("picture", "habitation/allumer_lumiere.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "11");
                habit.set("picture", "habitation/balayer.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "12");
                habit.set("picture", "habitation/machine_laver.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "13");
                habit.set("picture", "habitation/passer_piece.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "14");
                habit.set("picture", "habitation/prothese.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "15");
                habit.set("picture", "habitation/ranger_espace.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "16");
                habit.set("picture", "habitation/vaisselle.jpg");
                habit.set("nom", "Image relative aux habitures de vie au logis");
                habits.push(habit);
                break; 
            case '5':
                var habit = new Map();
                habit.set("id", "1");
                habit.set("picture", "deplacements/bus.jpg");
                habit.set("nom", "Image relative aux habitudes de déplacement");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "2");
                habit.set("picture", "deplacements/marcher.jpg");
                habit.set("nom", "Image relative aux habitudes de déplacement");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "3");
                habit.set("picture", "deplacements/traverser.jpg");
                habit.set("nom", "Image relative aux habitudes de déplacement");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "4");
                habit.set("picture", "deplacements/velo.jpg");
                habit.set("nom", "Image relative aux habitudes de déplacement");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "5");
                habit.set("picture", "deplacements/voiture.jpg");
                habit.set("nom", "Image relative aux habitudes de déplacement");
                habits.push(habit);
                break; 
            case '6':
                var habit = new Map();
                habit.set("id", "27");
                habit.set("picture", "responsabilites/acheter.jpg");
                habit.set("nom", "Image relative à un truc");
                habits.push(habit);
                break; 
            case '7':
                var habit = new Map();
                habit.set("id", "6");
                habit.set("picture", "loisirs/casque_ordi.jpg");
                habit.set("nom", "Image relative aux habitudes de loisirs");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "7");
                habit.set("picture", "loisirs/ecrire.jpg");
                habit.set("nom", "Image relative aux habitudes de loisirs");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "8");
                habit.set("picture", "loisirs/lire.jpg");
                habit.set("nom", "Image relative aux habitudes de loisirs");
                habits.push(habit);
                var habit = new Map();
                habit.set("id", "9");
                habit.set("picture", "loisirs/television.jpg");
                habit.set("nom", "Image relative aux habitudes de loisirs");
                habits.push(habit);
                break; 
        }

        return habits;
    }
}

export default commentaryAPI;