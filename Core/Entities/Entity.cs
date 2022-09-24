using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace Core.Entities
{
    public class Entity
    {
        public int Id { get; set; }

        public object this[string key]
        {
            get => this.GetType().GetProperty(key).GetValue(this);
            set => this.GetType().GetProperty(key).SetValue(this, value);
        }
    }
}