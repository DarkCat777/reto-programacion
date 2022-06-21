package com.avatar_global.pokeapi.model.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PokeApiListItem{
    @JsonProperty("name")
    private String name;
    @JsonProperty("url")
    private String url;
}
