package com.avatar_global.pokeapi.service;

import com.avatar_global.pokeapi.mapper.PokeApiListItemMapper;
import com.avatar_global.pokeapi.model.base.PageableRequest;
import com.avatar_global.pokeapi.model.pojo.PokeApiDetail;
import com.avatar_global.pokeapi.model.base.PokemonListItem;
import com.avatar_global.pokeapi.model.payload.GenericPageableResponse;
import com.avatar_global.pokeapi.model.pojo.PokeApiListResult;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class PokeApiService {
    private final String baseApiUrl = "https://pokeapi.co/api/v2/";
    private final String listPokeApiUrl = this.baseApiUrl + "pokemon-species";
    private final String detailPokeApiUrl = this.baseApiUrl + "pokemon/";
    private final String fPaginationParams = "?offset=%1$d&limit=%2$d";
    private final PokeApiListItemMapper mapper;

    public PokeApiService(PokeApiListItemMapper mapper) {
        this.mapper = mapper;
    }

    public GenericPageableResponse<PokemonListItem> getPokemonList(PageableRequest pageableRequest) {
        String completeUrl = this.listPokeApiUrl + String.format(fPaginationParams, pageableRequest.getOffset(), pageableRequest.getLimit());
        HttpServletRequest request = pageableRequest.getRequest();
        PokeApiListResult responseObject = new RestTemplate()
                .exchange(
                        completeUrl,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<PokeApiListResult>() {
                        }
                ).getBody();
        if (responseObject != null && responseObject.getResults() != null) {
            String apiNextUrl = responseObject.getNext();
            String apiPreviousUrl = responseObject.getPrevious();
            String nextUrl = null;
            if (apiNextUrl != null)
                nextUrl = apiNextUrl.replace(listPokeApiUrl, request.getRequestURL().toString());
            String previousUrl = null;
            if (apiPreviousUrl != null)
                previousUrl = apiPreviousUrl.replace(listPokeApiUrl, request.getRequestURL().toString());
            List<PokemonListItem> itemList = responseObject.getResults().stream().map(mapper::fromPokeApiListItem).collect(Collectors.toList());
            return new GenericPageableResponse<>(responseObject.getCount(), nextUrl, previousUrl, itemList);
        } else
            return new GenericPageableResponse<>();
    }

    public PokeApiDetail getPokemonById(Integer id) {
        String completeUrl = this.detailPokeApiUrl + id + "/";
        return new RestTemplate()
                .exchange(
                        completeUrl,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<PokeApiDetail>() {
                        }
                ).getBody();
    }
}
