(this doc is incomplete, using as a checklist/outline in development)

New tests for 1.6.0:
    - Gen tests:
        x Lora refiner
        x depth map through cnet node
        x style image through hints
    - LoRA node:
        - Versioning
            x Values are loaded correctly from previous version worklow
            x Widget values are saved by key
            x Widget values are loaded by key
            - On loading old version, inputs are fixed
        - UI tests
            x "Show mode" toggles visibility of "mode" widgets
            x "More" adds extra lora slots to list
                - their values are reset to defualt
                - maxes at 8
                - button is disabled at 8
                - works correctly with show mode on and off
            x "Less" removes lora slots from list
                - their values are reset (when serialised to json)
                - doesn't remove the first lora
                - button is disabled at 1
    - ControlNet node
        - Versioning
            x Values are loaded correctly from previous version worklow
            x Widget values are saved by key
            x Widget values are loaded by key
        - Ui tests
            - Correct widgets are shown depending on cnet model
    - Image Hints node
        - doesn't need ui tests, gen tests cover


Tests for 1.7.0
- I'm not sure I will have tests for response compression because it requires changing DT settings and I don't have that set up yet
- hi-res hint images
- pose images (put those together duh)
x Not connect error appears when running workflow without connecting to grpc server
x No model widget shows [object Object] when loading a workflow
x No model widget shows [object Object] when loading a workflow with disconnected server
x Correct model version widgets are shown when loading a workflow with disconnected server
    - create a new workflow with sampler node
    - pick flux, assert widgets
    - toggle tls, refresh
    - assert model shows "not connected" but flux widgets are still listed
    - and might as well hit tls again and assert the model updtes to flux
x new version announcement only appears once
    - not sure I have a set up for clearing user data yet, but if I do
    - clear user data
    - load, assert message, clear message, refresh, assert no message
x qwen model version widgets
