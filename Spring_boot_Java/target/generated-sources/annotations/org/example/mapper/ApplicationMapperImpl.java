package org.example.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.example.DTO.UserDTO.UserItemDTO;
import org.example.entities.User;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-09T18:52:06+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 18.0.1.1 (Oracle Corporation)"
)
@Component
public class ApplicationMapperImpl implements ApplicationMapper {

    @Override
    public UserItemDTO userItemDTO(User user) {
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
    public List<UserItemDTO> usersItemDTO_List(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserItemDTO> list = new ArrayList<UserItemDTO>( users.size() );
        for ( User user : users ) {
            list.add( userItemDTO( user ) );
        }

        return list;
    }
}
