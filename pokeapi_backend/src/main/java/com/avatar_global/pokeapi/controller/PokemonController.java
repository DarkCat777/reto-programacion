package com.avatar_global.pokeapi.controller;

import com.avatar_global.pokeapi.model.base.PageableRequest;
import com.avatar_global.pokeapi.model.base.PokemonListItem;
import com.avatar_global.pokeapi.model.payload.GenericPageableResponse;
import com.avatar_global.pokeapi.model.pojo.PokeApiDetail;
import com.avatar_global.pokeapi.service.PokeApiService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@Log4j2
@CrossOrigin("*")
@RequestMapping("/pokemon/api/v1")
public class PokemonController {
    private final PokeApiService apiService;

    public PokemonController(PokeApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/pokemon-list")
    @ResponseStatus(HttpStatus.OK)
    public GenericPageableResponse<PokemonListItem> getPokemonList(
            @RequestParam(value = "limit", defaultValue = "20") Integer limit,
            @RequestParam(value = "offset", defaultValue = "0") Integer offset,
            HttpServletRequest request
    ) {
        log.info("Request of Pokemon List");
        return apiService.getPokemonList(new PageableRequest(limit, offset, request));
    }

    @GetMapping("/pokemon/{id}")
    public PokeApiDetail getPokemonDetailById(
            @PathVariable Integer id
    ) {
        return apiService.getPokemonById(id);
    }

}
