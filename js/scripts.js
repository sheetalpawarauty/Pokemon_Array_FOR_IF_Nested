let pokemonList = [
    {name: 'pikachu', height: 4, types: ['field','fairy']},
    {name: 'bulbasaur', height: 7, types: ['monster','grass']},
    {name: 'paras', height: 3, types: ['bug','grass']},
    {name: 'squirtle', height: 5, types: ['monster','water']},
    {name: 'seel', height: 11, types: ['water','field']}
  ];

  
  for(let i=0;i<pokemonList.length;i++) {
    document.write(pokemonList[i].name+" "+"(height: "+pokemonList[i].height+")");
    if(pokemonList[i].height>10){
      document.write(" Wow! That's big!")
    }
    document.write("<br/>");
  }