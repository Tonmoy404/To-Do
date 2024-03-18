package rest

import (
	"fmt"
	"net/http"

	"github.com/Tonmoy404/config"
	"github.com/gin-gonic/gin"
)

type Server struct {
	router    *gin.Engine
	appConfig *config.Application
}

func NewServer(appconfig *config.Application) (*Server, error) {
	server := &Server{
		appConfig: appconfig,
	}

	server.setupRouter()
	return server, nil
}

func (server *Server) setupRouter() {
	router := gin.Default()

	router.GET("/api/test", server.test)

	server.router = router
}

func (server *Server) test(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, "The Route is working")
}

func (server *Server) Start() error {
	return server.router.Run(fmt.Sprintf("%s:%s", server.appConfig.Host, server.appConfig.Port))
}
