/**
 * Copyright 2018 OPEN-EYES S.r.l.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **/

var PosixMQ = require('posix-mq');

module.exports = function (RED) {
	"use strict";

	function VoipCmd(config) {
		RED.nodes.createNode(this,config);
		this.queue = config.queue;
        this.cmd = config.cmd;
        this.option = config.option;
		var posixmq = new PosixMQ();
		var node = this;
		var msg;
		var n;
		var send = false;

		node.on('input', function(msg) {
			var str;
			var payload=msg.payload;
			var n;

            try{
                var command;
                switch (node.cmd) {
                case "1":
                    command="dial";
                    break;
                case "2":
                    command="answer";
                    break;
                case "3":
                    command="hangup";
                    break;
                default:
                    command="";
                }
                var obj = {
                    command: command,
                    token: "30",
                    params: node.option
                };

                var strJSON = JSON.stringify(obj);

			    posixmq.open({ name: node.queue, create: false });
                n = posixmq.push(strJSON);
                posixmq.close();
                node.status({fill: "green", shape: "dot", text: node.queue.toString()});
            }
            catch(err){
                console.error(err);
                node.status({fill: "red", shape: "dot", text: node.queue.toString()});
            }

			//str = "BUTTOFF," + node.bid.toString() + ",END";

			//n = posixmq.push(str);



		});

	}

	RED.nodes.registerType("voipcmd", VoipCmd);
}
