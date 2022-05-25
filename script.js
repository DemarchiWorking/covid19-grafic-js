// let countriesPromise = fetch("https://api.covid19api.com/countries");
// countriesPromise.then((resp) => {
//     resp.json().then((countries) =>{
//         //alert(countries);
//     })
// });




// # URL API
let url = 'https://api.covid19api.com';

// # CHAMAR AXIOS
const api = axios.create();


// # PEGAR TODOS OS PAÍSES 
function countries(){
    let result = []
    alert(url+`/countries`)
    let response = api.get(url+`/countries`)
                        .then((response) => {
                            for(var item in response.data){
                               result.push((response.data[item].Country).replace('(','').replace(')',''))
                            }
                        })
    
        return result;
    }

console.log('====== PAISES =======')
let countryList = countries();
console.log('====== =======')




// # PEGAR TOTAL DE INFORMACOES POR PAIS
function total(country){
    let result = []

    let response = api.get(url+`/total/country/${country}`)
                        .then((response) => {
                            for(var item in response.data){
                            result.push(response.data[item])
                            }
                        })

        return result;
    }

console.log('====== TOTAL =======')
let br = total("Brazil")
console.log(br)
console.log('====== =======')




// # PEGAR TOTAL DE INFORMACOES POR PAIS

function forAllCountries(countryList){
    let result = ['a','b']
    console.log(countryList)
    console.log(countryList.length)
    for(item in countryList){       
        result.push('test');
//total(item)
        // let response = api.get(url+`/total/country/${country}`)
        //                     .then((response) => {
        //                         for(var item in response.data){
        //                            result.push((response.data[item]).replace('(',''))
        //                         }
        //                     })
        
        //     return result;
        }
        return result
    }

console.log('====== TOTAL =======')
let allCountries = forAllCountries(countryList);
console.log(allCountries);