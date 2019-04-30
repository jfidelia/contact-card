import PropTypes from "prop-types";

const getState = ( scope ) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
// 			updateContact: (history, APIid, name, email, phone, address) => {
// 				let store = scope.state.store;
// 				fetch("https://assets.breatheco.de/apis/fake/contact/" + APIid, {
//                 method: 'POST',
//                 headers: {
//                   "Content-type": "application/json;charset=utf-8"
//                 },
//                 body:   JSON.stringify({
//                         "full_name": name,
//                         "email": email,
//                         "agenda_slug": "downtown_viii",
//                         "address": address,
//                         "phone": phone
//                 })
//               })
//               .then(response => response.json())
//               .then(myJson => alert(JSON.stringify(myJson)))
//               .then(getUpdatedData => {
//                   fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii')
//                   .then(response => response.json())
//                     .then(myJson => alert(JSON.stringify(myJson))
//                   .then(data => {
//                       let store = scope.state.store;
//                       store.contacts = data;
//                       scope.setState({ store });
//                     })
                    
//                   .then(update => {
//                       history.push('/');
//                   }));
//               })

//               .catch(error => {
//                     alert(error);
//               });             
				
				
// 			},
			addContact: (props, name, email, phone, address) => {
				// let store = scope.state.store;
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
				method: 'POST',
                headers: {
                  "Content-type": "application/json;"
                },
                body:   JSON.stringify({
                        "full_name": name,
                        "email": email,
                        "agenda_slug": "downtown_viii",
                        "address": address,
                        "phone": phone
                })
                })
                .then(getDataUpdated => {
                    let store = scope.state.store;
            fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
                .then(response => response.json())
                .then(data => {
                 
                  store.contacts = data;
                  scope.setState({ store });
                  
                });
                
            });
            props.history.push("/");
			
			
			
            },
            
                
//                 .then(getUpdatedData => {
//                   fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii')
//                   .then(response => response.json())
//                     .then(data => {
//                     //   let store = scope.state.store;
//                       store.contacts = data;
//                       scope.setState({ store });
//                     });
                    
                    
                    
                 
				
// 			});props.history.push('/');
                // })
                
                // .catch (error => {
                //         alert(error);
                //     });
// 			},
			
			deleteContact: (id) => {    
				let store = scope.state.store;
				let apiId = store.contacts[id].id;
				fetch("https://assets.breatheco.de/apis/fake/contact/" + apiId, {
				method: 'DELETE'
				})
				.then(getDataUpdated => {
                    let store = scope.state.store;
            fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
                .then(response => response.json())
                .then(data => {
                 
                  store.contacts = data;
                  scope.setState({ store });
                  
                  
                });
                
            });
             // props.history.push("/");
			},
            
            editContact: (name,email,number,address, id) => {
                let store = scope.state.store;
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id  ,{
					method: 'PUT', 
				headers:{ 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"full_name":name,
					"email":email,
					"phone":number,
					"address":address,
					"agenda_slug":"downtown_viii"
					
					
					
				})
				})
				
				.then(getDataUpdated=>  {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())

				.then(data => {
			
					store.contacts = data;
					scope.setState({ store });
		
				
				});
				});
				
				
			}

				
				//get the store
				

			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
			
			}
	};};

getState.propTypes = {
    history: PropTypes.object
};
export default getState;


