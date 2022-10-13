package org.example.DTO.UserDTO;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class UserCreateDTO {
    @ApiModelProperty(value = "email of the user", example = "ooo.kov@gmail.com")
    private String email;
    @ApiModelProperty(value = "phone of the user", example = "380673621238")
    private String phone;
    @ApiModelProperty(value = "image of the user", example = "data:image/webp;base64,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")
    private String image;
    @ApiModelProperty(value = "password", example = "123123123")
    private String password;
    @ApiModelProperty(value = "age of the user", example = "18")
    private int age;
}
