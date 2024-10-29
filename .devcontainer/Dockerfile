FROM mcr.microsoft.com/devcontainers/typescript-node:22

ARG USERNAME=node

RUN apt-get update && apt-get install gnupg2 -y

RUN mkdir -p /home/$USERNAME/scripts_startup
# Used to persist bash history as per https://code.visualstudio.com/remote/advancedcontainers/persist-bash-history
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.zsh_history" \
    && mkdir /commandhistory \
    && touch /commandhistory/.zsh_history \
    && chown -R $USERNAME /commandhistory \
    && echo "$SNIPPET" >> "/home/$USERNAME/scripts_startup/zsh_history_persist.common.sh"
