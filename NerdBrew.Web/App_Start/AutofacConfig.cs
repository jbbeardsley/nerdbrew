using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.WebApi;

namespace NerdBrew.Web
{
    public static class AutofacConfig
    {
        public static void Bind()
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;

            builder.RegisterApiControllers(typeof(WebApiApplication).Assembly);

            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

        }
    }
}