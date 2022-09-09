package org.example.mapper;

import org.example.DTO.UserDTO.UserItemDTO;
import org.example.entities.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApplicationMapper {
    UserItemDTO userItemDTO(User user);
    List<UserItemDTO> usersItemDTO_List(List<User> users);
}
