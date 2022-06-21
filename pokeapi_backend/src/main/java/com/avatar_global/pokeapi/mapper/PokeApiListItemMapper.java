package com.avatar_global.pokeapi.mapper;

import com.avatar_global.pokeapi.model.base.PokemonListItem;
import com.avatar_global.pokeapi.model.pojo.PokeApiListItem;
import org.mapstruct.*;


@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface PokeApiListItemMapper {
    @Mappings(value = {
            @Mapping(target = "id", source = "pojo.url", qualifiedByName = {"getIdFromUrl"}),
            @Mapping(target = "name", source = "pojo.name")
    })
    PokemonListItem fromPokeApiListItem(PokeApiListItem pojo);

    @Named("getIdFromUrl")
    default Integer getIdFromUrl(String url) {
        return Integer.parseInt(url.substring(url.substring(0, url.length() - 2).lastIndexOf('/') + 1, url.length() - 1));
    }
}
