package com.application.ubicare.utils;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public class PageableRequest {

  public static Pageable setPageableObject(int pageIndex, int pageCount) {
    if (pageIndex < 0) {
      pageIndex = 0;
    }

    if (pageCount < 1) {
      pageCount = 10;
    }

    return PageRequest.of(pageIndex, pageCount);
  }
}