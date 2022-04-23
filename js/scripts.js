let pokemonList = [
    {name: 'pikachu', height: 4, types: ['field','fairy']},
    {name: 'bulbasaur', height: 7, types: ['monster','grass']},
    {name: 'paras', height: 3, types: ['bug','grass']},
    {name: 'seel', height: 11, types: ['water','field']},
    {name: 'squirtle', height: 5, types: ['monster','water']}
  ];

  document.write("Pokemon Array List:");

  for(let i=0;i<pokemonList.length;i++) {
    document.write("<ul>");
    document.write("<li>"+pokemonList[i].name+" "+"(height: "+pokemonList[i].height+")<\/li>");
    if(pokemonList[i].height>10){
      document.write(" Wow! That's big!")
    }
    document.write("<\/li><\/ul>");
  }