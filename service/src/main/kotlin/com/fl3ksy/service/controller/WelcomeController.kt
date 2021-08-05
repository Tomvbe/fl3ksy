package com.fl3ksy.service.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class WelcomeController {

    @GetMapping
    fun index(): String = "Welcome to Fl3ksy buddy!"

}