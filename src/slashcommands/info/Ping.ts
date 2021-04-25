import { APIInteraction } from "discord-api-types";
import { SlashCommandApi } from "../../api";
import { ArcoClient } from "../../Client";
import { SlashCommand } from "../../SlashCommand";

export default class Ping extends SlashCommand {

    constructor(client: ArcoClient, api: SlashCommandApi) {
        super(client, api, {
            name: 'ping',
            description: 'check if bot reply !'
        });
    }
    async run(interaction: APIInteraction): Promise<void> {
        this.api.createInteractionResponse({type: 4, data: {
            content: 'pong !'
        }}, interaction.id, interaction.token)
    }
}