﻿using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace MockApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetClients()
        {
            var clients = new[]
            {
                new Client
                {
                    Name = "Suleyman Deveci",
                    Nationality = "Turkish",
                    Occupation = "Computer Engineer",
                    Email = "suleymandeveci1907@gmail.com"
                },
                new Client
                {
                    Name = "Michal Kadlec",
                    Nationality = "Czech",
                    Occupation = "Footbal Player",
                    Email = "michalkadlec123@gmail.com"
                },
                new Client
                {
                    Name = "Daniel Craig",
                    Nationality = "British",
                    Occupation = "Actor",
                    Email = "daniel123@gmail.com"
                },
                new Client
                {
                    Name = "Margot Robbie",
                    Nationality = "Australian",
                    Occupation = "Actor",
                    Email = "robbie123@gmail.com"
                },
                new Client
                {
                    Name = "Elena Ferrante",
                    Nationality = "Italian",
                    Occupation = "Author",
                    Email = "Elena123@gmail.com"
                }
            };
            return  Ok(clients);
        }
    }

    public class Client
    {
        public required string Name { get; set; }
        public required string Nationality { get; set; }
        public required string Occupation { get; set; }
        public required string Email { get; set; }
    }
}
