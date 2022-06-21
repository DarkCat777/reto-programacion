package com.avatar_global.pokeapi.model.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PokeApiDetail {
    private Integer id;
    private String name;
    private Integer height;
    private Integer weight;
    private Sprites sprites;
    @JsonProperty("base_experience")
    private Integer baseExperience;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Sprites {
        @JsonProperty("back_default")
        private String backDefault;
        @JsonProperty("back_female")
        private String backFemale;
        @JsonProperty("back_shiny")
        private String backShiny;
        @JsonProperty("back_shiny_female")
        private String backShinyFemale;
        @JsonProperty("front_default")
        private String frontDefault;
        @JsonProperty("front_female")
        private String frontFemale;
        @JsonProperty("front_shiny")
        private String frontShiny;
        @JsonProperty("front_shiny_female")
        private String frontShinyFemale;
    }

}