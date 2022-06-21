package com.avatar_global.pokeapi.model.base;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.servlet.http.HttpServletRequest;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageableRequest {
    private Integer limit;
    private Integer offset;
    private HttpServletRequest request;
}
