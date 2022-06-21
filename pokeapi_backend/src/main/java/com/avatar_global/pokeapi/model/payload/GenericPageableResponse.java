package com.avatar_global.pokeapi.model.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenericPageableResponse<T> {
    private Integer count;
    private String next;
    private String previous;
    private List<T> results;
}
