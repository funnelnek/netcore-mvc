using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Utility;
using AutoMapper;
using Core.Entities;

namespace API.Dtos.Mappers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductDto>()
                .ForMember(d => d.Brand, o => o.MapFrom(s => s.Brand.Name))
                .ForMember(d => d.Type, o => o.MapFrom(s => s.Type.Name))
                .ForMember(d => d.ImageUrl, o => o.MapFrom<ProductUrlResolver>());
        }
    }
}