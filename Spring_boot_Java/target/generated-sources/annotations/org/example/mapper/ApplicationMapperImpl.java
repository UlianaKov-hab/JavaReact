package org.example.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.example.DTO.UserDTO.UserItemDTO;
import org.example.entities.UserEntity;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-14T18:49:54+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 18.0.1.1 (Oracle Corporation)"
)
@Component
public class ApplicationMapperImpl implements ApplicationMapper {

    @Override
    public UserItemDTO userItemDTO(UserEntity user) {
        if ( user == null ) {
            return null;
        }

        UserItemDTO userItemDTO = new UserItemDTO();

        userItemDTO.setId( user.getId() );
        userItemDTO.setEmail( user.getEmail() );
        userItemDTO.setPhone( user.getPhone() );
        userItemDTO.setImage( user.getImage() );
        userItemDTO.setAge( user.getAge() );

        return userItemDTO;
    }

    @Override
    public List<UserItemDTO> usersItemDTO_List(List<UserEntity> users) {
        if ( users == null ) {
            return null;
        }

        List<UserItemDTO> list = new ArrayList<UserItemDTO>( users.size() );
        for ( UserEntity userEntity : users ) {
            list.add( userItemDTO( userEntity ) );
        }

        return list;
    }
}
