
using A2.Data;
using A2.Handler;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;


public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddDbContext<A2DbContext>(options => options.UseSqlite(builder.Configuration["A2DBConnection"]));
        builder.Services.AddScoped<IA2Repo, A2Repo>();
        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services
            .AddAuthentication()
            .AddScheme<AuthenticationSchemeOptions, A2AuthHandler>("Authentication", null);
        builder.Services.AddAuthorization(options =>
        {
            options.AddPolicy("OrganizorOnly", policy => policy.RequireClaim("organizor"));
            options.AddPolicy("RegisteredUserOnly", policy => policy.RequireClaim("user"));
            options.AddPolicy("OrganizorOrUser", policy => {
                policy.RequireAssertion(context =>
                context.User.HasClaim(c => c.Type == "organizor" || c.Type == "user"));
                });
        
        });
        
            

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.UseAuthentication();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}