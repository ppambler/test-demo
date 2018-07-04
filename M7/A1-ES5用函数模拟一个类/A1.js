function Animal(species,name,weight,id){
    this.species = species
    this.name = name
    this.weight = weight 
    this.id = id 
}

Animal.prototype.move = function() {
    return '动起来'
}

var an = new Animal('鸡','小花','1kg','007')
