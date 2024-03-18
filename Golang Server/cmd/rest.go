package cmd

import (
	"github.com/Tonmoy404/config"
	"github.com/Tonmoy404/rest"
)

func serveRest() {
	appConfig := config.GetApp()

	server, err := rest.NewServer(appConfig)
	if err != nil {
		panic("Server can not start")
	}

	server.Start()
}
