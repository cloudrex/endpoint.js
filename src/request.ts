import express from "express";

export default class Request {
    protected readonly bridge: express.Request;

    public constructor(bridge: express.Request) {
        this.bridge = bridge;
    }
}
