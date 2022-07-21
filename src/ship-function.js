const shipFunction = function(type,length,status){
    const hit = function(){
        length--;
    };
    const sunk = function(){
        status = 'sunk';
    }
    return{
    type : type,
    length : length,
    status : status
    }
}