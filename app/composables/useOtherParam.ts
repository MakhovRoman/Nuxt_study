export default function () {
    const otherParam = ref(1);
    const changeParams = (valueToAdd: number) => {
        otherParam.value += valueToAdd;
    };

    return { otherParam, changeParams };
}