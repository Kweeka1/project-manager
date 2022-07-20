using AutoMapper;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;
using mvc.Models.User;
using mvc.Models.User.Request;
using mvc.Models.User.Response;

namespace mvc.Mappings;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserDetails>();
        CreateMap<ToConfirm, EmailArgs>();
        CreateMap<ToConfirm, User>();
        CreateMap<Update, User>()
            .ForMember(user => user.Password, opt => opt.Ignore())
            .ForMember(user => user.CreatedOn, opt => opt.Ignore())
            .ForMember(user => user.UserId, opt => opt.Ignore());
        CreateMap<UserDetails, EmailArgs>();
        CreateMap<Registration, User>()
            .ForMember(user => user.Password, opt => opt.Ignore())
            .ForMember(user => user.CreatedOn, opt => opt.Ignore())
            .ForMember(user => user.UserId, opt => opt.Ignore());
    }
}