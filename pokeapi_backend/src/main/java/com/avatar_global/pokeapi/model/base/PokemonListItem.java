package com.avatar_global.pokeapi.model.base;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PokemonListItem {
    private Integer id;
    private String name;
}
