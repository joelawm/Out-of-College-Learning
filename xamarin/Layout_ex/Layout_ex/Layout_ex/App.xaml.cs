using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Layout_ex
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            // Uncomment these to see each section

            //MainPage = new StackPage();
            MainPage = new GridPage();
            //MainPage = new AbsolutePage();
            //MainPage = new RelativePage();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
