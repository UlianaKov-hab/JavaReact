package org.example.DTO.product;

import lombok.Data;

@Data
public class ProductImageSaveDTO {
    private String fileName;
    private  int id;

    public ProductImageSaveDTO(int id, String fileName) {
        this.fileName = fileName;
        this.id = id;
    }
}
