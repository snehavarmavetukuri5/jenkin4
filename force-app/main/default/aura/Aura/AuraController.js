({
	addition : function(component, event, helper) {
// load it in n1    from the component get the value of num1 
        var n1 = component.get("v.num1");//component to controiller
        var n2 = component.get("v.num2");// component to controller
        var n3 = parseInt(n1) + parseInt(n2);//change the values to integer
    //n the component set the value of res with n3    
        component.set("v.res", n3);//controller to component
	}
    ,
    difference : function(component, event, helper) {
// load it in n1    from the component get the value of num1 
        var n1 = component.get("v.num1");//component to controiller
        var n2 = component.get("v.num2");// component to controller
        var n3 = parseInt(n1) - parseInt(n2);//change the values to integer
    //n the component set the value of res with n3    
        component.set("v.res", n3);//controller to component
	}
 ,
  product : function(component, event, helper) {
// load it in n1    from the component get the value of num1 
        var n1 = component.get("v.num1");//component to controiller
        var n2 = component.get("v.num2");// component to controller
        var n3 = parseInt(n1) * parseInt(n2);//change the values to integer
    //n the component set the value of res with n3    
        component.set("v.res", n3);//controller to component
	}
  ,
divide : function(component, event, helper) {
// load it in n1    from the component get the value of num1 
        var n1 = component.get("v.num1");//component to controiller
        var n2 = component.get("v.num2");// component to controller
        var n3 = parseInt(n1) / parseInt(n2);//change the values to integer
    //n the component set the value of res with n3    
        component.set("v.res", n3);//controller to component
	}
,
remainder : function(component, event, helper) {
// load it in n1    from the component get the value of num1 
        var n1 = component.get("v.num1");//component to controiller
        var n2 = component.get("v.num2");// component to controller
        var n3 = parseInt(n1) % parseInt(n2);//change the values to integer
    //n the component set the value of res with n3    
        component.set("v.res", n3);//controller to component
	}
})