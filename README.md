# Statr

Statr is a simple app state manager, thought to be used in frontend or Node projects.
It is framework agnostic, so it can be used with React, Angular, WebComponents, Express or anything else.

##### See examples on github for some frameworks at 
https://github.com/jesus-cm/statr


You can access the state from anywhere in your application, just have to import it


### Import
**Typescript**

	import Statr from 'statr';

**Javascript**

	const Statr = require('statr').default;

### Usage

Statr can keep track of several independent states. To set any state just call:

    Statr.setState('state_name', {dataToStore});
    
To get current state:

	Statr.getState('state_name');
    
    
To listen when a status is changed, you can subscribe to onStateChange, and you will receive the new status

	Statr.onStateChange('state_name').subscribe(new_status => {console.log(new_status)});
    
###### ** For performance reasons you should unsubscribe from the onStateChange on every component destroy that may be subscribed to it:

	const subscription = Statr.onStateChange('state_name').subscribe(new_status => {console.log(new_status)});
    
    On component destroy:
    subscription.unsubscribe();
    
    
The states usually are an object, so there are also methods to set a single property, and to retrieve it. 
Calling setStateProperty will trigger onStateChange subscriptions

	Statr.setStateProperty('state_name', 'property', new_value);
    
    Statr.getStateProperty('state_name', 'property');

    
   
    
The first time that a component is subscribed, it will receive the state in that moment.


##### Tip

Could be a good idea to init your states on your app start
    
    
    
    
  
